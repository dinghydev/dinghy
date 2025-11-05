import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PERSONALIZERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Personalizers.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 55.2,
}

export function Personalizers(props: NodeProps) {
  return (
    <Shape
      {...PERSONALIZERS}
      {...props}
      _style={extendStyle(PERSONALIZERS, props)}
    />
  )
}
