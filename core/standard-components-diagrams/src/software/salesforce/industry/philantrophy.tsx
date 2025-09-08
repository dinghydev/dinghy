import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PHILANTROPHY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.philantrophy;',
  },
  _original_width: 49.8,
  _original_height: 60,
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
