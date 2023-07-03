export default async function getData(pageNum,callBack) {
    const rawRes = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageNum}`
    );
    const datas = await rawRes.json();
    await callBack(datas.results)
}
