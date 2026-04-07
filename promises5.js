async function func() {
    const res1 = await getSmth(2);
    const res2 = await getSmth(3);
    const res3 = await getSmth(4);

    console.log(res1 + res2 + res3);
}

func();