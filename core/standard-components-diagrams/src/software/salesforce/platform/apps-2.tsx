import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.apps2;',
  },
  _width: 60,
  _height: 60,
}

export function Apps2(props: DiagramNodeProps) {
  return <Shape {...APPS_2} {...props} _style={extendStyle(APPS_2, props)} />
}
