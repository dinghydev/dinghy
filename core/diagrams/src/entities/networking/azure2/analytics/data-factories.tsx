import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_FACTORIES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Data_Factory.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DataFactories(props: NodeProps) {
  return (
    <Shape
      {...DATA_FACTORIES}
      {...props}
      _style={extendStyle(DATA_FACTORIES, props)}
    />
  )
}
