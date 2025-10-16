import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BROWSER_WINDOW = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.containers.browserWindow;rSize=0;strokeColor=#666666;strokeColor2=#008cff;strokeColor3=#c4c4c4;mainText=,;recursiveResize=0;',
  },
  _width: 0,
  _height: 380,
}

export function BrowserWindow(props: DiagramNodeProps) {
  return (
    <Shape
      {...BROWSER_WINDOW}
      {...props}
      _style={extendStyle(BROWSER_WINDOW, props)}
    />
  )
}
