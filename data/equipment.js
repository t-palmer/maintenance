const equipment = [
    {
        name: "Compressor Small",
        maintenence: ["annual", "monthly"]
    },
    {
        name: "Compressor Medium",
        maintenence: ["annual", "monthly", 'weekly']
    },
    {
        name: "Compressor Large",
        maintenence: ["annual", "daily"]
    },
    {
        name: "Air Handler Small",
        maintenence: ["monthly", "weekly"]
    },
    {
        name: "Air Handler Medium",
        maintenence: ["annual", "monthly"]
    },
    {
        name: "Air Handler Large",
        maintenence: ["annual", "monthly", "daily"]
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