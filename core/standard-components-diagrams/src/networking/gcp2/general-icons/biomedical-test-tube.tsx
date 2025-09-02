import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIOMEDICAL_TEST_TUBE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.biomedical_test_tube',
  },
  _original_width: 31,
  _original_height: 100,
}

export function BiomedicalTestTube(props: DiagramNodeProps) {
  return (
    <Shape
      {...BIOMEDICAL_TEST_TUBE}
      {...props}
      _style={extendStyle(BIOMEDICAL_TEST_TUBE, props)}
    />
  )
}
