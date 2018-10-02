const equipment = [
    {
        name: "Compressor Small",
        maintenance: [
            {
                maintenanceType: "annual",
                status: "pending"
            },
            {
                maintenanceType: "monthly",
                status: "complete"
            }
        ]
    },
    {
        name: "Compressor Medium",
        maintenance: [
            {
                maintenanceType: "annual",
                status: "complete"
            },
            {
                maintenanceType: "monthly",
                status: "overdue"
            },
            {
                maintenanceType: "weekly",
                status: "pending"
            }
        ]
    },
    {
        name: "Compressor Large",
        maintenance: [
            {
                maintenanceType: "annual",
                status: "overdue"
            },
            {
                maintenanceType: "daily",
                status: "complete"
            }
        ]
    },
    {
        name: "Air Handler Small",
        maintenance: [
            {
                maintenanceType: "monthly",
                status: "pending"
            },
            {
                maintenanceType: "weekly",
                status: "complete"
            }
        ]
    },
    {
        name: "Air Handler Medium",
        maintenance: [
            {
                maintenanceType: "annual",
                status: "pending"
            },
            {
                maintenanceType: "monthly",
                status: "complete"
            }
        ]
    },
    {
        name: "Air Handler Large",
        maintenance: [
            {
                maintenanceType: "annual",
                status: "overdue"
            },
            {
                maintenanceType: "monthly",
                status: "complete"
            },
            {
                maintenanceType: "daily",
                status: "complete"
            }
        ]
    }
];

const maintenance = {
    annual: {
        name: "Annual Maintenence",
        description: "Maintenence done yearly",
        days: 365
    },
    monthly: {
        name: "Monthly Maintenence",
        description: "Maintenence done monthly",
        days: 30
    },
    weekly: {
        name: "Weekly Maintenence",
        description: "Maintenence done monthly",
        days: 7
    },
    daily: {
        name: "Daily Maintenence",
        description: "Maintenence done every day",
        days: 1
    }
};