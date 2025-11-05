import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_FACTORIES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Factory.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
