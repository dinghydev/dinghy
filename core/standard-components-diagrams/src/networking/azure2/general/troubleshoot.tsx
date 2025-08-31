import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TROUBLESHOOT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Troubleshoot.svg;strokeColor=none;',
  },
  _width: 66,
  _height: 68,
}

export function Troubleshoot(props: DiagramNodeProps) {
  return (
    <Shape
      {...TROUBLESHOOT}
      {...props}
      _style={extendStyle(TROUBLESHOOT, props)}
    />
  )
}
