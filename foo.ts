const foo = () => {
  console.log(`foo ${location.href}`)
  console.log(`foo ${import.meta.url}`)
}

export { foo }
