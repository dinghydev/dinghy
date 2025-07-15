import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BIOMEDICAL_TEST_TUBE = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.biomedical_test_tube',
  _width: 31,
  _height: 100,
}

export function BiomedicalTestTube(props: DiagramNodeProps) {
  return <Shape {...BIOMEDICAL_TEST_TUBE} {...props} />
}
