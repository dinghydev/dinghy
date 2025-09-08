import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SYSTEMS_MANAGER_SESSION_MANAGER = {
  _color: { color: '#E7157B', fill: true },
  _border: 1,
  _shape: 'mxgraph.aws4.systems_manager_session_manager',
}

export function SystemsManagerSessionManager(props: DiagramNodeProps) {
  return <Shape {...SYSTEMS_MANAGER_SESSION_MANAGER} {...props} />
}
