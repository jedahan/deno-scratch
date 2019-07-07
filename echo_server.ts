const { listen, stdout } = Deno

const hello = new TextEncoder()
  .encode(" hi there %_% \n")

const main = async () => {
  const listener = listen("tcp", ":9000")
  const encoder = new TextEncoder()

  while (true) {
    const socket = await listener.accept()
    socket.write(hello)
    let buffer = new Uint8Array(128)
    let nread

    while (nread = await socket.read(buffer)) {
      const text = new TextDecoder().decode(buffer)
      buffer.flush()
      const input = encoder.encode(`> ${text}`)
      const output = encoder.encode(`< ${text}`)
      await stdout.write(input)
      await socket.write(output)
    }
  }
}


main()
