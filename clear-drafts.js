// 清除所有草稿的脚本
const DB_NAME = 'ClosetDB';
const request = indexedDB.open(DB_NAME);
request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction('outfitDrafts', 'readwrite');
    const store = transaction.objectStore('outfitDrafts');
    const clearRequest = store.clear();
    clearRequest.onsuccess = () => {
        console.log('所有草稿已清除');
        alert('草稿已清除，请刷新页面');
    };
};
