import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_DATAPROC = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjE1Ljk2NTYwODU5NjgwMTc1OCIgaGVpZ2h0PSIxNC43ODkzMTUyMjM2OTM4NDgiIHZpZXdCb3g9IjAuMDQxMjc5MTMzNDA5MjYxNzAzIDAuMDAwMTYyNjU3NDY2NzE3MDY0MzggMTUuOTY1NjA4NTk2ODAxNzU4IDE0Ljc4OTMxNTIyMzY5Mzg0OCI+JiN4YTsJPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hhOwkuc3Qwe2ZpbGw6IzQyODVmNDt9JiN4YTsJPC9zdHlsZT4mI3hhOwk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTUuNTgxIDkuODMyYTMuMTIgMy4xMiAwIDAgMC0xLjE0LTEuMTNoLS4xMmwtNS0yLjg4YTMuMTIgMy4xMiAwIDEgMC00LjY4LTIuNjZoMHY1LjhhMy4wOSAzLjA5IDAgMCAwLTMuMDYgMGgwYTMuMTMxIDMuMTMxIDAgMCAwIDMuMSA1LjQ0aDAgMGw1LjA4LTIuOTRhMy4wOSAzLjA5IDAgMCAwIC40MSAxLjUyIDMuMTMgMy4xMyAwIDEgMCA1LjQxLTMuMTV6bS05LjQgMS4zMnYtNS4zNmEzLjExIDMuMTEgMCAwIDAgLjUzLjI1bDQuNjEgMi42N2gwYTMuMTMgMy4xMyAwIDAgMC0uNTEuMzhsLTQuNTggMi42MmEzLjA4IDMuMDggMCAwIDAtLjA1LS41NnptLjgyLTkuMzZhMS41MiAxLjUyIDAgMSAxLS43NyAxLjMyIDEuNTIgMS41MiAwIDAgMSAuNzctMS4zMnptLTMuMSAxMS4yMWExLjUyIDEuNTIgMCAxIDEgLjU3LTIuMDcgMS41MiAxLjUyIDAgMCAxLS41NyAyLjA3em05Ljc2LS4zM2ExLjUyIDEuNTIgMCAwIDEtMi4wOS0uNWgwYTEuNTIxIDEuNTIxIDAgMSAxIDIuNjMtMS41M2wuMDcuMTJhMS41MiAxLjUyIDAgMCAxLS42MiAxLjkxeiIvPiYjeGE7PC9zdmc+;strokeColor=none;',
  },
  _original_width: 32,
  _original_height: 30,
}

export function CloudDataproc(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_DATAPROC}
      {...props}
      _style={extendStyle(CLOUD_DATAPROC, props)}
    />
  )
}
