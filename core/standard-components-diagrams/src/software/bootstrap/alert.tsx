import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALERT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#B8DCFE;strokeWidth=1;fillColor=#CCE7FE;fontColor=#004583;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;',
  },
  _width: 800,
  _height: 40,
}

export function Alert(props: DiagramNodeProps) {
  return <Shape {...ALERT} {...props} _style={extendStyle(ALERT, props)} />
}
