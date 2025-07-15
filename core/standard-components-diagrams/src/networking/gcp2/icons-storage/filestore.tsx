import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILESTORE = {
  _style:
    'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjAgMTYiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CS5zdDF7ZmlsbDojNjY5ZGY2O30mI3hhOwkuc3Qye2ZpbGw6I2FlY2JmYTt9JiN4YTsJPC9zdHlsZT4mI3hhOwk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIgMTBIOEw2IDhoOHoiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTYgMkg0bDEtMmgxMHptMyAzSDFsMS0yaDE2eiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNCA3bC0yIDNIOEw2IDdIMHY5aDIwVjd6Ii8+JiN4YTs8L3N2Zz4=;',
  _width: 42,
  _height: 34,
}

export function Filestore(props: DiagramNodeProps) {
  return <Shape {...FILESTORE} {...props} />
}
