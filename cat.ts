const filename = Deno.args[1]

const main = async () => {
  const rid = await Deno.open(filename)

  await Deno.copy(Deno.stdout, rid)
}

main()
