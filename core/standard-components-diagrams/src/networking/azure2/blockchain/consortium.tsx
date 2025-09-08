import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONSORTIUM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/Consortium.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Consortium(props: DiagramNodeProps) {
  return (
    <Shape {...CONSORTIUM} {...props} _style={extendStyle(CONSORTIUM, props)} />
  )
}
