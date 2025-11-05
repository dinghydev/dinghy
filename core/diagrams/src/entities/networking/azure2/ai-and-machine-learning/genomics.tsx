import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENOMICS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Genomics.svg;strokeColor=none;',
  },
  _width: 36,
  _height: 68,
}

export function Genomics(props: NodeProps) {
  return (
    <Shape {...GENOMICS} {...props} _style={extendStyle(GENOMICS, props)} />
  )
}
