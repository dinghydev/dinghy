import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OSCONFIG = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/OSConfig.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 56.68,
}

export function Osconfig(props: DiagramNodeProps) {
  return (
    <Shape {...OSCONFIG} {...props} _style={extendStyle(OSCONFIG, props)} />
  )
}
