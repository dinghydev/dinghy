import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HEROKU_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.heroku2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Heroku2(props: DiagramNodeProps) {
  return (
    <Shape {...HEROKU_2} {...props} _style={extendStyle(HEROKU_2, props)} />
  )
}
