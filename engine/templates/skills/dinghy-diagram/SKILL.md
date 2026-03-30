---
name: dinghy-diagram
description: Create a new Dinghy Diagram (Diagram as Code). Use when the user wants to create architecture diagrams, system diagrams, or visual documentation using Dinghy's programmable React-based diagramming. Generates draw.io diagrams exported with PNG.
argument-hint: [description]
---

Create programmable, data-driven diagrams using React TSX. The output is a
draw.io diagram (with optional PNG export). Unlike static diagramming tools,
Dinghy diagrams are code — composable, reusable, and able to evolve with your
system.

## Workflow

1. **Create the TSX file** in the current directory. Name it descriptively
   (kebab-case, e.g. `ecs-architecture.tsx`, `auth-flow.tsx`). Each `.tsx` file
   exports a default React component that defines the diagram. Only import
   modules that are actually used — do not generate unused imports.

2. **After generating the diagram**, ask the user if they want to run
   `dinghy render` to render it (generates draw.io XML and exports PNG). Only
   mention `dinghy render <file>` if the folder contains multiple diagram files.

## Project Layout

All diagram TSX files live in the root folder — no subdirectories needed.

```
ecs-architecture.tsx      <- each file is a separate diagram
auth-flow.tsx
sequence-login.tsx
```

Each `.tsx` file is a separate diagram (stack).

## Core Concepts

### Shape component

All visual objects are based on `Shape`. A shape is either an **entity** (no
visible children) or a **container** (has children).

**Prefer named functions over `_title` or text content.** The `_title` defaults
to the component tag name split by camelCase into words (e.g. `<LoadBalancer />`
→ "Load Balancer", `<PublicSubnet />` → "Public Subnet"). Do not set `_title`
when it would produce the same result as this automatic conversion. This makes
diagrams more readable and enables target matching by tag name.

```tsx title="named-components.tsx"
import { Shape } from '@dinghy/base-components'

export default () => (
  <WebApp>
    <Client _dependsOn='Cloud' />
    <Cloud>
      <PublicSubnet _dependsOn='PrivateSubnet'>
        <LoadBalancer />
        <Firewall />
      </PublicSubnet>
      <PrivateSubnet>
        <Application />
        <Postgres />
      </PrivateSubnet>
    </Cloud>
  </WebApp>
)

const WebApp = (props: any) => <Shape _direction='vertical' {...props} />
const Client = (props: any) => <Shape {...props} />
const Cloud = (props: any) => <Shape {...props} />
const Subnet = (props: any) => (
  <Shape _direction='vertical' _distributed {...props} />
)
const PublicSubnet = (props: any) => <Subnet {...props} />
const PrivateSubnet = (props: any) => <Subnet {...props} />
const LoadBalancer = (props: any) => <Shape {...props} />
const Application = (props: any) => <Shape {...props} />
const Firewall = (props: any) => <Shape {...props} />
const Postgres = (props: any) => <Shape {...props} />
```

- Nesting creates parent-child containment.
- Named components get auto-titled from their tag name via camelCase word
  splitting (e.g. `<LoadBalancer />` → "Load Balancer").
- Only set `_title` when the desired label differs from this auto-conversion.
- Define shared base components (like `Subnet` above) for common styling.
- **Limit sibling count: max 6 horizontal, 8 vertical.** Too many siblings in
  one container can exceed the draw.io headless rendering canvas limit. If a
  container has more elements, split them into sub-groups. Only exceed these
  limits when the diagram truly requires it.
- **Group related entities into containers.** When multiple entities are
  logically related (e.g. a service and its tasks, a load balancer and its
  targets), wrap them in a named container rather than placing them as flat
  siblings. Flat sibling entities at the same level render on the same axis,
  which looks odd and loses the logical grouping. For example, in an ECS
  cluster, each service and its tasks should be in their own container:

```tsx
// BAD — flat siblings, all on same axis
<EcsCluster>
  <ServiceA />
  <TasksA />
  <ServiceB />
  <TasksB />
</EcsCluster>

// GOOD — grouped into containers with vertical direction
<EcsCluster>
  <ServiceAGroup>
    <ServiceA />
    <TasksA />
  </ServiceAGroup>
  <ServiceBGroup>
    <ServiceB />
    <TasksB />
  </ServiceBGroup>
</EcsCluster>

const ServiceGroup = (props: any) => <Shape _direction='vertical' {...props} />
const ServiceAGroup = (props: any) => <ServiceGroup {...props} />
const ServiceBGroup = (props: any) => <ServiceGroup {...props} />
```

### Dependency component

Express relationships between shapes using `Dependency`, `_dependsOn`, or
`_dependsBy`.

**Arrows flow left-to-right and top-to-bottom.** `_dependsOn` draws an arrow
from the current shape to the target — arrange source shapes to the left of or
above their targets so arrows follow the natural reading direction.

Target matching resolves in order: `_id` attribute, `_title` attribute, then
component tag name. Values can be a single string or array of strings. Prefer
using the function/tag name (e.g. `'LoadBalancer'`) over the title (e.g.
`'Load Balancer'`) for dependency targets.

**Prefer container-level dependencies over element-level ones.** When showing
the flow between logical layers or groups, place `_dependsOn` on the container
rather than on individual child elements. This produces cleaner arrows that
connect groups as a whole, instead of spaghetti lines crossing between
individual elements. For example, in a layered architecture, connect
`PublicSubnet → PrivateSubnet` and `EcsCluster → DataLayer` rather than
`ALB → WebService` and `WebService → Rds`. Only use element-level dependencies
when you need to show a specific connection between two individual entities that
is not captured by the container relationship.

```tsx
// BAD — element-level dependencies create cluttered arrows
<PublicSubnet>
  <Alb _dependsOn='Cdn' />
</PublicSubnet>
<PrivateSubnet>
  <EcsCluster>
    <WebService _dependsOn='Alb' />
    <ApiService _dependsOn='Alb' />
  </EcsCluster>
  <DataLayer>
    <Rds _dependsOn={['ApiTasks', 'WorkerTasks']} />
    <Cache _dependsOn='ApiTasks' />
  </DataLayer>
</PrivateSubnet>

// GOOD — container-level dependencies produce clean, readable arrows
<PublicSubnet _dependsOn='PrivateSubnet'>
  <Alb />
</PublicSubnet>
<PrivateSubnet>
  <EcsCluster _dependsOn='DataLayer'>
    <WebService />
    <ApiService />
  </EcsCluster>
  <DataLayer>
    <Rds />
    <Cache />
  </DataLayer>
</PrivateSubnet>
```

**Keep only primary relationships.** Only add dependencies that represent the
main data or request flow. Avoid adding every possible connection — too many
arrows make the diagram cluttered and hard to read.

**Order elements to avoid arrow crossings and overlaps.** When placing sibling
elements in a container, choose the order so that dependency arrows flow
straight down (or across) without crossing each other.

### draw.io elements

Import pre-built draw.io library elements for richer visuals. Find the right
module in the [Component Catalog](#component-catalog) below, then read the
corresponding `modules/*.md` file to discover available components.

```tsx title="drawio.tsx"
import { Shape } from '@dinghy/base-components'
import { Android } from '@dinghy/diagrams/entitiesAws17Sdk'
import * as awsGeneralResources from '@dinghy/diagrams/entitiesAwsGeneralResources'
import * as awsGroups from '@dinghy/diagrams/containersAwsGroups'
import { PostgreSqlInstance } from '@dinghy/diagrams/entitiesAwsDatabase'
import { ApplicationLoadBalancer } from '@dinghy/diagrams/entitiesAwsNetworkContentDelivery'
import { Waf } from '@dinghy/diagrams/entitiesAwsSecurityIdentityCompliance'

export default () => (
  <WebApp>
    <Client _dependsOn='Cloud' />
    <Cloud>
      <PublicSubnet _dependsOn='PrivateSubnet'>
        <LoadBalancer />
        <Firewall />
      </PublicSubnet>
      <PrivateSubnet>
        <Application />
        <Postgres />
      </PrivateSubnet>
    </Cloud>
  </WebApp>
)

const Postgres = (props: any) => <PostgreSqlInstance {...props} />
const WebApp = (props: any) => (
  <Shape _direction='vertical' {...props} _style={{ noLabel: 1 }} />
)
const Cloud = (props: any) => <awsGroups.AwsCloud {...props} />
const PublicSubnet = (props: any) => (
  <awsGroups.PublicSubnet _direction='vertical' _distributed {...props} />
)
const PrivateSubnet = (props: any) => (
  <awsGroups.PrivateSubnet _direction='vertical' _distributed {...props} />
)
const LoadBalancer = (props: any) => <ApplicationLoadBalancer {...props} />
const Firewall = (props: any) => (
  <Waf _style={{ strokeColor: 'blue', fillColor: 'transparent' }} {...props} />
)
const Application = (props: any) => <Android {...props} />
const Client = (props: any) => <awsGeneralResources.Client {...props} />
```

### Composite diagrams

Higher-level diagram types built from the core primitives:

```tsx title="sequence-diagram.tsx"
import { SequenceDiagram } from '@dinghy/diagrams/sequenceDiagram'
import { Client, User } from '@dinghy/diagrams/entitiesAwsGeneralResources'

const sequenceDiagram = {
  title: 'Sequence diagram from data',
  participants: {
    User: { icon: User },
    Client: { icon: Client },
  },
  messages: [
    { from: 'User', to: 'Servers', message: 'Request' },
    { from: 'Servers', to: 'Client', message: 'Response' },
    { from: 'Client', to: 'Servers', message: 'Ack', return: true },
    { from: 'Servers', to: 'User', message: 'Done', return: true },
    { from: 'User', to: 'User', message: 'self' },
  ],
  interactions: [
    {
      title: 'Login Flow',
      messages: [
        { from: 'User', to: 'Client', message: 'Login' },
        { from: 'Client', to: 'Servers', message: 'Auth' },
      ],
    },
  ],
}

export default () => <SequenceDiagram {...sequenceDiagram} />
```

## Attributes Reference

All dinghy internal attributes are prefixed with `_` (underscore). Non-prefixed
attributes are reserved for Infrastructure as Code data models.

### Visual attributes

| Attribute       | Type   | Description                             |
| --------------- | ------ | --------------------------------------- |
| `_title`        | string | Shape title/label                       |
| `_color`        | string | Sets strokeColor and fontColor together |
| `_background`   | string | Background fillColor                    |
| `_width`        | number | Shape width in pixels                   |
| `_height`       | number | Shape height in pixels                  |
| `_x`            | number | X position (absolute layout)            |
| `_y`            | number | Y position (absolute layout)            |
| `_image`        | string | Image URL or base64 for the entity      |
| `_style`        | object | Custom drawio mxCell style attributes   |
| `_mxGraphModel` | string | Extract style from mxGraphModel XML     |

### Layout attributes

| Attribute        | Type                          | Description                                                                                                                                                                                                                                                                                                  |
| ---------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `_direction`     | `vertical` \| `horizontal`    | Children layout direction (default: horizontal)                                                                                                                                                                                                                                                              |
| `_align`         | `left` \| `center` \| `right` | Horizontal alignment                                                                                                                                                                                                                                                                                         |
| `_verticalAlign` | `top` \| `middle` \| `bottom` | Vertical alignment                                                                                                                                                                                                                                                                                           |
| `_margin`        | `{top, bottom, left, right}`  | Margin in pixels (default: 15)                                                                                                                                                                                                                                                                               |
| `_padding`       | `{top, bottom, left, right}`  | Padding in pixels (default: 15)                                                                                                                                                                                                                                                                              |
| `_distributed`   | boolean                       | Evenly distribute children in the container. **IMPORTANT: Always add `_distributed` to any container with 2 or more children.** This ensures even spacing and proper alignment. Without it, multi-child containers will look cramped or misaligned. Try this before adjusting dimensions or spacing manually |

### Display modes

| Attribute  | Type | Description                                   |
| ---------- | ---- | --------------------------------------------- |
| `_display` | enum | Control visibility:                           |
|            |      | `invisible` — shape hidden, children rendered |
|            |      | `none` — shape and children hidden            |
|            |      | `inactive` — dashed border/edges              |
|            |      | `entity` — force entity mode, children hidden |

### Relationship attributes

| Attribute    | Type               | Description                          |
| ------------ | ------------------ | ------------------------------------ |
| `_dependsOn` | string \| string[] | Draw arrow from this shape to target |
| `_dependsBy` | string \| string[] | Draw arrow from target to this shape |
| `_arrow`     | enum               | `end`, `start`, `both`, `none`       |
| `_view`      | string \| string[] | Control visibility by active view    |

## Custom Components

Create named components by wrapping `Shape` or draw.io elements. Always spread
`{...props}` to allow parent attributes to pass through.

```tsx
import { Shape } from '@dinghy/base-components'
import { PostgreSqlInstance } from '@dinghy/diagrams/entitiesAwsDatabase'

export default () => (
  <MyArchitecture>
    <Backend _dependsOn='DataLayer'>
      <Api />
      <Worker />
    </Backend>
    <DataLayer>
      <Database />
    </DataLayer>
  </MyArchitecture>
)

const MyArchitecture = (props: any) => (
  <Shape _direction='vertical' {...props} />
)
const Backend = (props: any) => (
  <Shape
    _direction='vertical'
    _distributed
    _color='#00A4A6'
    _background='#E6F6F7'
    {...props}
  />
)
const Api = (props: any) => <Shape {...props} />
const Worker = (props: any) => <Shape {...props} />
const DataLayer = (props: any) => <Shape {...props} />
const Database = (props: any) => (
  <PostgreSqlInstance _width={60} _height={60} {...props} />
)
```

## Examples

### Direction and layout

```tsx title="direction.tsx"
import { Shape } from '@dinghy/base-components'

export default () => (
  <DirectionExample>
    <DefaultHorizontal>
      <ItemA />
      <ItemB />
    </DefaultHorizontal>
    <VerticalLayout>
      <ItemC />
      <ItemD />
    </VerticalLayout>
  </DirectionExample>
)

const DirectionExample = (props: any) => (
  <Shape _direction='vertical' _distributed {...props} />
)
const DefaultHorizontal = (props: any) => <Shape _distributed {...props} />
const VerticalLayout = (props: any) => (
  <Shape _direction='vertical' _distributed {...props} />
)
const ItemA = (props: any) => <Shape {...props} />
const ItemB = (props: any) => <Shape {...props} />
const ItemC = (props: any) => <Shape {...props} />
const ItemD = (props: any) => <Shape {...props} />
```

### Color and background

```tsx title="color.tsx"
import { Shape } from '@dinghy/base-components'

export default () => (
  <ColorExample>
    <BlueShape />
    <GreenContainer>
      <ItemA />
    </GreenContainer>
    <GreyBackground>
      <ItemB />
    </GreyBackground>
  </ColorExample>
)

const ColorExample = (props: any) => (
  <Shape _direction='vertical' _distributed {...props} />
)
const BlueShape = (props: any) => <Shape _color='blue' {...props} />
const GreenContainer = (props: any) => <Shape _color='green' {...props} />
const GreyBackground = (props: any) => (
  <Shape _background='lightgrey' _width={200} {...props} />
)
const ItemA = (props: any) => <Shape {...props} />
const ItemB = (props: any) => <Shape {...props} />
```

### Arrows

```tsx title="arrow.tsx"
import { Dependency, Shape } from '@dinghy/base-components'

export default () => (
  <ArrowsExample>
    <DefaultArrow>
      <Source _dependsOn='Target' />
      <Target />
    </DefaultArrow>
    <ReverseArrow>
      <NodeA _dependsOn='NodeB' _arrow='start' />
      <NodeB />
    </ReverseArrow>
    <BothArrows>
      <NodeC _dependsOn='NodeD' _arrow='both' />
      <NodeD />
    </BothArrows>
    <InactiveDep>
      <NodeE>
        <Dependency _target='NodeF' _display='inactive' />
      </NodeE>
      <NodeF />
    </InactiveDep>
  </ArrowsExample>
)

const ArrowsExample = (props: any) => (
  <Shape _direction='vertical' _distributed {...props} />
)
const DefaultArrow = (props: any) => <Shape _distributed {...props} />
const ReverseArrow = (props: any) => <Shape _distributed {...props} />
const BothArrows = (props: any) => <Shape _distributed {...props} />
const InactiveDep = (props: any) => <Shape _distributed {...props} />
const Source = (props: any) => <Shape {...props} />
const Target = (props: any) => <Shape {...props} />
const NodeA = (props: any) => <Shape {...props} />
const NodeB = (props: any) => <Shape {...props} />
const NodeC = (props: any) => <Shape {...props} />
const NodeD = (props: any) => <Shape {...props} />
const NodeE = (props: any) => <Shape {...props} />
const NodeF = (props: any) => <Shape {...props} />
```

### Custom drawio style

```tsx title="style.tsx"
import { Shape } from '@dinghy/base-components'

export default () => (
  <StyleExample>
    <StyledAsObject />
    <StyledAsString />
  </StyleExample>
)

const StyleExample = (props: any) => (
  <Shape _direction='vertical' _distributed {...props} />
)
const StyledAsObject = (props: any) => (
  <Shape
    _style={{
      fillColor: '#ff0000',
      fontColor: '#00ff00',
      strokeColor: '#0000ff',
    }}
    {...props}
  />
)
const StyledAsString = (props: any) => (
  <Shape
    _style='fillColor=#ff0000;fontColor=#00ff00;strokeColor=#0000ff'
    {...props}
  />
)
```

### Views

```tsx title="view.tsx"
import { Shape } from '@dinghy/base-components'

export default () => (
  <MultipleViews>
    <DefaultView>
      <OverviewShape1 />
      <OverviewShape2 />
    </DefaultView>
    <AllView>
      <AllViewShape1 />
      <AllViewShape2 />
    </AllView>
    <SubViewOnly>
      <SubViewShape1 />
      <SubViewShape2 />
    </SubViewOnly>
  </MultipleViews>
)

const MultipleViews = (props: any) => <Shape _distributed {...props} />
const DefaultView = (props: any) => <Shape _distributed {...props} />
const AllView = (props: any) => (
  <Shape _view={['overview', 'all-view']} _distributed {...props} />
)
const SubViewOnly = (props: any) => (
  <Shape _view='sub-view-only' _distributed {...props} />
)
const OverviewShape1 = (props: any) => <Shape {...props} />
const OverviewShape2 = (props: any) => <Shape {...props} />
const AllViewShape1 = (props: any) => <Shape {...props} />
const AllViewShape2 = (props: any) => <Shape {...props} />
const SubViewShape1 = (props: any) => <Shape {...props} />
const SubViewShape2 = (props: any) => <Shape {...props} />
```

## Commands

| Command                | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| `dinghy render`        | Render all diagrams to draw.io XML and export as PNG        |
| `dinghy render <file>` | Render a specific diagram (only needed with multiple files) |

## Loading Module Details

When you need to use draw.io library components in a diagram:

1. Find the matching category in the Component Catalog below
2. Read the file `modules/<category>.md` from this skill's directory to get the
   full list of available components and exact import paths
3. Use the import path and component names from the module detail file

Example: If the user needs AWS database icons, find "Aws" in the catalog, read
`modules/aws.md`, then find `entitiesAwsDatabase` section to discover components
like `PostgreSqlInstance`, `AuroraInstance`, `DynamoDb`, etc.

You can read multiple module files if the diagram needs components from
different providers.

## Component Catalog

When the user needs specific draw.io components, find the matching category
below and read the corresponding file from the `modules/` subdirectory of this
skill directory.

| Category                            | File                                 | Modules | Sample Components                                                                                                                                                  |
| ----------------------------------- | ------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Software, Active Directory          | `modules/active-directory.md`        | 1       | ActiveDirectory, CdDvd, CellPhone, ClusterServer, CommunityDiscussion, ...                                                                                         |
| Networking, Alibaba Cloud           | `modules/alibaba-cloud.md`           | 1       | AbapBusinessApplicationPlatform, AcmsApplicationConfigurationManangement, AcrCloudContainerRegistry, Actiontrail, AdamAdvancedDatabaseAndApplicationMigration, ... |
| Networking, Allied Telesis          | `modules/allied-telesis.md`          | 7       | Apartments, BuildingCluster, LargeBuilding, LongBuilding, MediumBusinessBuilding, ...                                                                              |
| Software, Android                   | `modules/android.md`                 | 1       | ActionBar, ActionBarBright, ActionBarLandscape, ActionBarLandscapeBright, ButtonDisabledBright, ...                                                                |
| Business, Archimate2                | `modules/archimate2.md`              | 2       | Access, Access2, Aggregation, Assignment, Association, ...                                                                                                         |
| Business, Archimate3                | `modules/archimate3.md`              | 9       | Access, Access2, Access3, Aggregation, Assignment, ...                                                                                                             |
| Software, Atlassian                 | `modules/atlassian.md`               | 1       | Atlassian, AvatarAvailable, AvatarAway, AvatarDoNotDisturb, AvatarLarge, ...                                                                                       |
| Networking, Aws                     | `modules/aws.md`                     | 34      | AutoScalingGroup, AvailabilityZone, AwsAccount, AwsCloud, AwsCloud2, ...                                                                                           |
| Networking, Aws17                   | `modules/aws17.md`                   | 22      | AutoScalingGroup, AvailabilityZone, AwsCloud, CorporateDataCenter, Ec2InstanceContainer, ...                                                                       |
| Networking, Aws18                   | `modules/aws18.md`                   | 27      | AutoScalingGroup, AvailabilityZone, AwsCloud, AwsStepFunctionsWorkflow, ElasticLoadBalancing, ...                                                                  |
| Networking, Azure                   | `modules/azure.md`                   | 1       | AccessControl, Automation, Autoscale, AzureActiveDirectory, AzureAlert, ...                                                                                        |
| Networking, Azure2                  | `modules/azure2.md`                  | 31      | AiStudio, AnomalyDetector, AppliedAi, BatchAi, Bonsai, ...                                                                                                         |
| Software, Bootstrap                 | `modules/bootstrap.md`               | 2       | DropdownButton3, DropdownButton6, Alert, Alert2, Alert3, ...                                                                                                       |
| Business, Bpmn2                     | `modules/bpmn2.md`                   | 8       | CallChoreographyCallingGlobal, ChoreographyTask, AdHocCollapsed, AdHocExpanded, BusinessRule, ...                                                                  |
| Software, C4                        | `modules/c4.md`                      | 2       | Legend, Component, Container, DataContainer, ExternalPerson, ...                                                                                                   |
| Other, Cabinets                     | `modules/cabinets.md`                | 1       | AuxiliaryContactCircuitBreaker, AuxiliaryContactContactor132a, AuxiliaryContactContactor32125a, Cabinet, CircuitBreaker1p, ...                                     |
| Networking, Cae                     | `modules/cae.md`                     | 27      | BatchAi, BotServices, CognitiveServices, GenomicsAccounts, MachineLearningServiceWorkspaces, ...                                                                   |
| Networking, Cisco                   | `modules/cisco.md`                   | 35      | AdDecoder, AdEncoder, Camera, CiscoMeetingplaceExpress, CiscoUnifiedContactCenterEnterpriseAndHosted, ...                                                          |
| Networking, Citrix                  | `modules/citrix.md`                  | 9       | AuthenticationAdaptive, AuthenticationCert, AuthenticationEpa, AuthenticationFailure, AuthenticationFido2, ...                                                     |
| Sequence Diagram                    | `modules/composites.md`              | 1       | SequenceDiagram, Activation, Message, Participant, Frame                                                                                                           |
| Networking, Cumulus                 | `modules/cumulus.md`                 | 2       | Component100g, Component10g, Component1g, Component25g, Component40g, ...                                                                                          |
| Software, Data Flow Diagram         | `modules/data-flow-diagram.md`       | 2       | DirectionalConnector, ActivityProcessEntityExternalInteractor, Check, Check2, DataProcess, ...                                                                     |
| Networking, Dynamics365             | `modules/dynamics365.md`             | 4       | BusinessCentral, Commerce, ConnectedStore, CoreHr, CustomerInsights, ...                                                                                           |
| Other, Eip                          | `modules/eip.md`                     | 9       | Pipe, PointToPointChannel, CommandMessage, CommandMessage2, CommandMessage3, ...                                                                                   |
| Other, Electrical                   | `modules/electrical.md`              | 19      | MFContact, DashedWire, DirectionOfFlow, TransmissionPath, Bell, ...                                                                                                |
| Software, Entity Relation           | `modules/entity-relation.md`         | 3       | Table1, Table2, TableRow1, TableRow2, Component0To1, ...                                                                                                           |
| Other, Floor Plans                  | `modules/floor-plans.md`             | 1       | Bathtub, BedSingle, BedDouble, Bookcase, Chair, ...                                                                                                                |
| Other, Fluid Power                  | `modules/fluid-power.md`             | 1       | X10010ControlMechanism, X10020PlungerWith, X10030PushPullControl, X10040ControlMechanism, X10050TurningControl, ...                                                |
| Networking, Gcp Icons               | `modules/gcp-icons.md`               | 16      | AdvancedSolutionsLab, AiHub, AiPlatform, Automl, AutomlNaturalLanguage, ...                                                                                        |
| Networking, Gcp2                    | `modules/gcp2.md`                    | 35      | FailureStatus, OptionalPrimaryPath, OptionalSecondaryPath, PrimaryPath, SecondaryPath, ...                                                                         |
| Other, Gmdl                         | `modules/gmdl.md`                    | 18      | BottomNavigation, BottomNavigation2, BottomSheet, GridStyleWithSomeOptions, DropdownButton, ...                                                                    |
| Networking, Ibm                     | `modules/ibm.md`                     | 26      | ClassicInfrastructure, CloudServices, EnterpriseNetwork, IbmCloud, InstanceGroup, ...                                                                              |
| Other, Info Graphic                 | `modules/info-graphic.md`            | 1       | AngledEntry, AngledEntry2, AngledList, AngledList10, AngledList2, ...                                                                                              |
| Software, Ios                       | `modules/ios.md`                     | 3       | Add, AlertBox, AlphabetList, AppBarPortrait, Arrow, ...                                                                                                            |
| Networking, Kubernetes              | `modules/kubernetes.md`              | 1       | Api, Api2, CRole, CRole2, Cm, ...                                                                                                                                  |
| Software, Mockup                    | `modules/mockup.md`                  | 9       | Table, Button, FormattedButton, HorizontalButtonBar, OnOffButton, ...                                                                                              |
| Networking, Network                 | `modules/network.md`                 | 3       | CommLink, BiometricReader, Bus, Bus2, Bus3, ...                                                                                                                    |
| Networking, Office                  | `modules/office.md`                  | 10      | Azure, Cloud, CloudDisaster, CloudDisasterRed, CloudExchangeOnline, ...                                                                                            |
| Networking, Openstack               | `modules/openstack.md`               | 4       | CinderVolume, CinderVolumeattachment, DesignateRecordset, DesignateZone, HeatAutoscalinggroup, ...                                                                 |
| Other, Proc Eng                     | `modules/proc-eng.md`                | 24      | AgitatorAnchor, AgitatorCrossBeam, AgitatorDisc, AgitatorFlateBladePaddle, AgitatorGatPaddle, ...                                                                  |
| Networking, Rack                    | `modules/rack.md`                    | 9       | NumberedRackCabinet, RackCabinet, Shelf, ApcSmartUps10003000Va2u, ApcSmartUps5000Va5u, ...                                                                         |
| Software, Salesforce                | `modules/salesforce.md`              | 5       | DefaultRelationshipConnector, DefaultRelationshipConnector2, DefaultRelationshipConnector3, DefaultRelationshipConnector4, Card, ...                               |
| Networking, Sap                     | `modules/sap.md`                     | 15      | BusinessEntityRecognition, DataAttributeRecommendation, DocumentInformationExtraction, InvoiceObjectRecommendation, PersonalizedRecommendation, ...                |
| Other, Signs                        | `modules/signs.md`                   | 11      | Bear1, Bear2, Deer1, Deer2, DogOnLeash, ...                                                                                                                        |
| Software, Sitemap                   | `modules/sitemap.md`                 | 1       | AboutUs, Audio, Biography, Blog, Calendar, ...                                                                                                                     |
| Standard                            | `modules/standard.md`                | 17      | ShapeGroup, Table1, Table2, TableWithTitle1, TableWithTitle2, ...                                                                                                  |
| Business, Sysml                     | `modules/sysml.md`                   | 19      | Rate4, DependencyRelationship, Generalization, FoundMessage, GeneralOrdering, ...                                                                                  |
| Other, Threat Modeling              | `modules/threat-modeling.md`         | 3       | AssetTable, SecurityControlTable, ThreatActorTable, BidirectionalDataFlow, DataFlow, ...                                                                           |
| Software, Uml                       | `modules/uml.md`                     | 6       | ActorLifeline, BoundaryLifeline, ControlLifeline, EntityLifeline, Lifeline, ...                                                                                    |
| Business, Value Stream Mapping      | `modules/value-stream-mapping.md`    | 2       | ElectronicInformation, ManualInformation, Shipments, AirFreight, BatchedKanban, ...                                                                                |
| Networking, Veeam                   | `modules/veeam.md`                   | 2       | Component1ftvm, Component1ftvmError, Component1ftvmRunning, Component1ftvmUnavailable, Component1ftvmWarning, ...                                                  |
| Networking, Veeam2                  | `modules/veeam2.md`                  | 10      | ArrowGrey3, ArrowTopaz, ConnectorGrey2, ConnectorGrey3, ConnectorTopaz, ...                                                                                        |
| Networking, Vmware Validated Design | `modules/vmware-validated-design.md` | 1       | Administrator, App, AppVolumesManager, AppstackVolume, ArrayManager, ...                                                                                           |
| Other, Web                          | `modules/web.md`                     | 2       | Adfty, AdobePdf, Aim, Allvoices, Amazon, ...                                                                                                                       |
