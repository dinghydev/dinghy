import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRIVACY_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.privacy2;',
  },
  _width: 60,
  _height: 60,
}

export function Privacy2(props: DiagramNodeProps) {
  return (
    <Shape {...PRIVACY_2} {...props} _style={extendStyle(PRIVACY_2, props)} />
  )
}
