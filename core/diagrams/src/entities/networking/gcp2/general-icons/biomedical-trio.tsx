import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BIOMEDICAL_TRIO = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.biomedical_trio',
  },
  _width: 100,
  _height: 68,
}

export function BiomedicalTrio(props: DiagramNodeProps) {
  return (
    <Shape
      {...BIOMEDICAL_TRIO}
      {...props}
      _style={extendStyle(BIOMEDICAL_TRIO, props)}
    />
  )
}
