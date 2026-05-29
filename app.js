const searchUaveConfig = { serverId: 2156, active: true };

const searchUaveHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_2156() {
    return searchUaveConfig.active ? "OK" : "ERR";
}

console.log("Module searchUave loaded successfully.");