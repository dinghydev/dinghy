import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PERSISTENT_DISK = {
  _style: {
    entity:
      'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjE1Ljg0MDAwMDE1MjU4Nzg5IiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMTUuODQwMDAwMTUyNTg3ODkgMjAiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CS5zdDF7ZmlsbDojNjY5ZGY2O30mI3hhOwkuc3Qye2ZpbGw6I2FlY2JmYTt9JiN4YTsJPC9zdHlsZT4mI3hhOwk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMCAxNi4yNVYyMGgxNS44NHYtOC4zM2gtMy43NXY0LjU4eiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNS44NCAzLjc1VjBIMHY4LjMzaDMuNzVWMy43NXoiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMCAxMC40MnYzLjc1aDEwVjkuNThoNS44NFY1LjgzaC0xMHY0LjU5eiIvPiYjeGE7PC9zdmc+;strokeColor=none;',
  },
  _width: 34,
  _height: 42,
}

export function PersistentDisk(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PERSISTENT_DISK)} />
}
