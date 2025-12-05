#!/bin/bash

# Configuration
DATA_DIR="/home/ubuntu/enquiry/data"             # Directory where new JSON files are stored
SENT_DIR="/home/ubuntu/enquiry/sent_emails"      # Directory where processed JSON files will be moved
TO_EMAIL="theprana.ai@gmail.com,abhishekaspatil@gmail.com,ygaikwad735@gmail.com"  # Recipient email address
SUBJECT="New Enquiry Received"        # Subject of the email

# Ensure the sent directory exists
mkdir -p "$SENT_DIR"

# Loop through each JSON file in the data directory
for JSON_FILE in "$DATA_DIR"/*.json; do
    if [ -f "$JSON_FILE" ]; then
        # Parse the JSON file using jq (updated key names to match your JSON structure)
        FIRSTNAME=$(jq -r '.firstName' "$JSON_FILE")
        LASTNAME=$(jq -r '.lastName' "$JSON_FILE")
        EMAILID=$(jq -r '.email' "$JSON_FILE")
        MESSAGE=$(jq -r '.message' "$JSON_FILE")
        SUBMITTED_AT=$(jq -r '.submittedAt' "$JSON_FILE")

        # Create the HTML body of the email
        EMAIL_BODY=$(cat <<EOF
<html>
  <head>
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <h2>New Enquiry Received</h2>
    <p><strong>Dear Team,</strong></p>
    <p>You have received a new enquiry. Here are the details:</p>
    <table>
      <tr>
        <th>First Name</th>
        <td>$FIRSTNAME</td>
      </tr>
      <tr>
        <th>Last Name</th>
        <td>$LASTNAME</td>
      </tr>
      <tr>
        <th>Email ID</th>
        <td>$EMAILID</td>
      </tr>
      <tr>
        <th>Message</th>
        <td>$MESSAGE</td>
      </tr>
      <tr>
        <th>Submitted At</th>
        <td>$SUBMITTED_AT</td>
      </tr>
    </table>
    <p>Best regards,</p>
    <p>Your Automated System</p>
  </body>
</html>
EOF
)

        # Send the email using mail command
        echo "$EMAIL_BODY" | mail -a "Content-Type: text/html" -s "$SUBJECT" "$TO_EMAIL"

        # Print confirmation for each file processed
        echo "Email sent successfully to $TO_EMAIL for $JSON_FILE"

        # Move the processed JSON file to the sent directory
        mv "$JSON_FILE" "$SENT_DIR/"
    fi
done

echo "Script execution completed."

