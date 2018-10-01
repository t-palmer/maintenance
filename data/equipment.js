const equipment = [
    {
        name: "Compressor Small",
        maintenence: [
            {
                maintenenceType: "annual",
                status: "pending"
            },
            {
                maintenenceType: "monthly",
                status: "complete"
            }
        ]
    },
    {
        name: "Compressor Medium",
        maintenence: [
            {
                maintenenceType: "annual",
                status: "complete"
            },
            {
                maintenenceType: "monthly",
                status: "overdue"
            },
            {
                maintenenceType: "weekly",
                status: "pending"
            }
        ]
    },
    {
        name: "Compressor Large",
        maintenence: [
            {
                maintenenceType: "annual",
                status: "overdue"
            },
            {
                maintenenceType: "daily",
                status: "complete"
            }
        ]
    },
    {
        name: "Air Handler Small",
        maintenence: [
            {
                maintenenceType: "monthly",
                status: "pending"
            },
            {
                maintenenceType: "weekly",
                status: "complete"
            }
        ]
    },
    {
        name: "Air Handler Medium",
        maintenence: [
            {
                maintenenceType: "annual",
                status: "pending"
            },
            {
                maintenenceType: "monthly",
                status: "complete"
            }
        ]
    },
    {
        name: "Air Handler Large",
        maintenence: [
            {
                maintenenceType: "annual",
                status: "overdue"
            },
            {
                maintenenceType: "monthly",
                status: "complete"
            },
            {
                maintenenceType: "daily",
                status: "complete"
            }
        ]
    }
];

const maintenence = {
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
        days: 30
    },
    daily: {
        name: "Daily Maintenence",
        description: "Maintenence done every day",
        days: 1
    }
};