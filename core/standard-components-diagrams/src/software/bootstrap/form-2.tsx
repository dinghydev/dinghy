import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FORM_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=none;strokeColor=#999999;align=left;spacing=15;fontSize=14;fontColor=#6C767D;',
  },
  _width: 1,
  _height: 500,
}

export function Form2(props: DiagramNodeProps) {
  return <Shape {...FORM_2} {...props} _style={extendStyle(FORM_2, props)} />
}
