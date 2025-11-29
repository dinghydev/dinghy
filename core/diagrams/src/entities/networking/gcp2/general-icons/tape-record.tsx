import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAPE_RECORD = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.tape_record',
  },
  _width: 100,
  _height: 71,
}

export function TapeRecord(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TAPE_RECORD)} />
}
