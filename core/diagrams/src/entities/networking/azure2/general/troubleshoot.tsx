import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TROUBLESHOOT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Troubleshoot.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 68,
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
