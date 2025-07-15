import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APP_BAR_PORTRAIT = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.ios.iAppBar;strokeWidth=1;sketch=0;',
  _width: 0,
  _height: 15,
}

export function AppBarPortrait(props: DiagramNodeProps) {
  return <Shape {...APP_BAR_PORTRAIT} {...props} />
}
