import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAVE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.save',
  },
  _original_width: 100,
  _original_height: 84,
}

export function Save(props: NodeProps) {
  return <Shape {...SAVE} {...props} _style={extendStyle(SAVE, props)} />
}
