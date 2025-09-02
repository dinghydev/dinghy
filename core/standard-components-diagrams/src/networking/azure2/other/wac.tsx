import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WAC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/WAC.svg;strokeColor=none;',
  },
  _original_width: 62,
  _original_height: 68,
}

export function Wac(props: DiagramNodeProps) {
  return <Shape {...WAC} {...props} _style={extendStyle(WAC, props)} />
}
