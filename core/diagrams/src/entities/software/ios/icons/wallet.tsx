import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WALLET = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.wallet;',
  },
  _width: 30,
  _height: 24,
}

export function Wallet(props: NodeProps) {
  return <Shape {...WALLET} {...props} _style={extendStyle(WALLET, props)} />
}
