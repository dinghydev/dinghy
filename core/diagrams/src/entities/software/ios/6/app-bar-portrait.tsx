import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APP_BAR_PORTRAIT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.ios.iAppBar;strokeWidth=1;sketch=0;',
  },
  _width: 0,
  _height: 15,
}

export function AppBarPortrait(props: NodeProps) {
  return (
    <Shape
      {...APP_BAR_PORTRAIT}
      {...props}
      _style={extendStyle(APP_BAR_PORTRAIT, props)}
    />
  )
}
