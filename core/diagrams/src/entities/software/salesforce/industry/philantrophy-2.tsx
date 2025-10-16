import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PHILANTROPHY_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.philantrophy2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Philantrophy2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHILANTROPHY_2}
      {...props}
      _style={extendStyle(PHILANTROPHY_2, props)}
    />
  )
}
