import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MIGRATION_PROJECTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Migration_Projects.svg;strokeColor=none;',
  _width: 50,
  _height: 32,
}

export function MigrationProjects(props: DiagramNodeProps) {
  return <Shape {...MIGRATION_PROJECTS} {...props} />
}
