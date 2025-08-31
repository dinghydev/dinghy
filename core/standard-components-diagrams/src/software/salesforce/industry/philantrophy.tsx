import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHILANTROPHY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.philantrophy;',
  },
  _width: 49.8,
  _height: 60,
}

export function Philantrophy(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHILANTROPHY}
      {...props}
      _style={extendStyle(PHILANTROPHY, props)}
    />
  )
}
