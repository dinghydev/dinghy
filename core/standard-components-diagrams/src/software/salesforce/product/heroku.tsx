import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEROKU = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.heroku;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Heroku(props: DiagramNodeProps) {
  return <Shape {...HEROKU} {...props} _style={extendStyle(HEROKU, props)} />
}
