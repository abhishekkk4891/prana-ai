#!/bin/bash

# Configuration
JSON_FILE="./data/data1.json"  # Path to the JSON file
TO_EMAIL="abhishekaspatil@gmail.com"    # Recipient email address
SUBJECT="New Enquiry Received"      # Subject of the email
#FROM_EMAIL="abhishek.patil.5891@gmail.com>"     # Sender's email address

# Parse the JSON file using jq
FIRSTNAME=$(jq -r '.firstname' "$JSON_FILE")
LASTNAME=$(jq -r '.lastname' "$JSON_FILE")
EMAILID=$(jq -r '.emailid' "$JSON_FILE")
MESSAGE=$(jq -r '.message' "$JSON_FILE")

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
    </table>
    <p>Best regards,</p>
    <p>Your Automated System</p>
  </body>
</html>
EOF
)

# Send the email using mail command
echo "$EMAIL_BODY" | mail -a "Content-Type: text/html" -s "$SUBJECT" "$TO_EMAIL"

# Print confirmation
echo "Email sent successfully to $TO_EMAIL"

