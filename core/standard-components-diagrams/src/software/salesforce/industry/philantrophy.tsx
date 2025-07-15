import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHILANTROPHY = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.philantrophy;',
  _width: 49.8,
  _height: 60,
}

export function Philantrophy(props: DiagramNodeProps) {
  return <Shape {...PHILANTROPHY} {...props} />
}
