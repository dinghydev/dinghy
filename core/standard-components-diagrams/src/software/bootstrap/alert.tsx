import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALERT = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#B8DCFE;strokeWidth=1;fillColor=#CCE7FE;fontColor=#004583;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;',
  _width: 800,
  _height: 40,
}

export function Alert(props: DiagramNodeProps) {
  return <Shape {...ALERT} {...props} />
}
