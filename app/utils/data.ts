import { SITE_HEALTH, STATE } from "./interface";

export const data = {
  LOGOS: {
    "CLIENT_LOGO": "https://via.placeholder.com/250",
    "CONTRACTING_LOGO": "https://via.placeholder.com/250"
  },
  _id: "report-12345",
  PROJECT_NAME: "Project Alpha",
  ADDRESS: "123 Main St, City, Country",
  createdAt: "2024-09-04T10:00:00Z",
  ATTENDANCE: [
    {
      "_id": "attendance-1",
      "NAME": "John Doe",
      "POSITION": "SUPERVISOR",
      "attendance": 10
    },
    {
      "_id": "attendance-2",
      "NAME": "Jane Smith",
      "POSITION": "TECHNICIAN",
      "attendance": 8
    }
  ],
  MATERIALS: [
    {
      "name": "Steel Beam",
      "quantity": 50,
      "unit": "kg"
    },
    {
      "name": "Concrete Mix",
      "quantity": 20,
      "unit": "m³"
    }
  ],
  DATE_START: "2024-08-01",
  DATE_END: "2024-09-01",
  NOTES: [
    {
      "category": "Safety",
      "note": "All workers wore proper safety gear.",
      "ATTACHMENTS": [
        {
          "type": "IMAGE",
          "src": "https://via.placeholder.com/1200",
          "_id": "attachment-1"
        }
      ],
      "_id": "note-1"
    },
    {
      "category": "Progress",
      "note": "Project is proceeding as planned.",
      "ATTACHMENTS": [],
      "_id": "note-2"
    }
  ],
  SITE_HEALTH: SITE_HEALTH.OK,
  STATE: STATE.IN_PROGRESS,
  START_PROJECT: "2024-07-15",
  BUDGET: [
    {
      "ESTIMATED": 10000,
      "ACTUAL": 9000,
      "UNIT": "kg",
      "NAME": "Steel Beam"
    },
    {
      "ESTIMATED": 5000,
      "ACTUAL": 4500,
      "UNIT": "m³",
      "NAME": "Concrete Mix"
    }
  ],
  REPORT_PHOTOS: [
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
    "https://via.placeholder.com/1200",
  ]
}
