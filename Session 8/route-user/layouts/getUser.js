
export default async function getUser(userId,callBack) {
      const rawRes = await fetch(
        `https://rickandmortyapi.com/api/character/${userId}`
    );
    const datas = await rawRes.json();
    await callBack(datas)
}
