import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTOMOTIVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.automotive;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Automotive(props: DiagramNodeProps) {
  return (
    <Shape {...AUTOMOTIVE} {...props} _style={extendStyle(AUTOMOTIVE, props)} />
  )
}
