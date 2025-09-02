import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_RECORD = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.tape_record',
  },
  _original_width: 100,
  _original_height: 71,
}

export function TapeRecord(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_RECORD}
      {...props}
      _style={extendStyle(TAPE_RECORD, props)}
    />
  )
}
