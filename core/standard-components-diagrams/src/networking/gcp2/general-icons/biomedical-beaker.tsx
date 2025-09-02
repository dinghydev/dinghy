import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIOMEDICAL_BEAKER = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.biomedical_beaker',
  },
  _original_width: 69,
  _original_height: 100,
}

export function BiomedicalBeaker(props: DiagramNodeProps) {
  return (
    <Shape
      {...BIOMEDICAL_BEAKER}
      {...props}
      _style={extendStyle(BIOMEDICAL_BEAKER, props)}
    />
  )
}
