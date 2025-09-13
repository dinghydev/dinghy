import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const URL_BAR = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.ios.iURLBar;verticalAlign=top;fontSize=8;spacingTop=-5;align=center;sketch=0;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 30,
}

export function UrlBar(props: DiagramNodeProps) {
  return <Shape {...URL_BAR} {...props} _style={extendStyle(URL_BAR, props)} />
}
