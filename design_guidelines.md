# Design Guidelines - Inventory Control Application

## Design Approach
**User-Provided Specification**: The user has provided explicit design requirements that must be followed precisely. This is a utility-focused inventory management application with a clean, professional aesthetic.

## Color Palette
- **Background**: Light gray (#d3d3e0)
- **Card/Form Background**: White (#ffffff)
- **Primary Action Color**: Purple (#9b4dff)
- **Button Text**: White
- **Headings**: Black (#222)
- **Subtitles**: Dark gray (#555)
- **Links**: Purple (#9b4dff)

## Typography
- **Font Family**: Arial, sans-serif
- **H1 (Page Titles)**: 28px, black color, minimal bottom margin
- **Subtitles**: Regular weight, dark gray (#555), small bottom margin
- **Links**: 14px, purple, no underline
- **Input/Button Text**: 16px

## Layout System
**Spacing**: Use consistent 12px-20px gaps between form elements
**Container**: Max-width 400px, centered both vertically and horizontally
**Form Elements**: 12px vertical gap between inputs

## Component Library

### Input Fields
- White background
- 12px padding
- 8px border-radius
- No border
- 16px font size
- Full width

### Buttons
- Purple background (#9b4dff)
- White text
- 14px padding (vertical)
- 8px border-radius
- No border
- 16px font size
- Cursor pointer
- Full width

### Form Container
- Transparent background (sits on gray page background)
- Centered layout
- Max-width constraint
- Vertical flex layout with gaps

## Page Structure

### Authentication Pages (Login/Cadastro)
- Centered single-column layout
- Page title (H1)
- Subtitle "Controle de Estoque"
- Form with stacked inputs
- Primary action button
- Footer link to alternate action (purple text)

### Functional Pages (Produto/Movimentações)
- Same centered layout pattern
- Longer forms with multiple inputs
- Consistent spacing and styling
- Single submit button at bottom

## Responsive Behavior
- Mobile-first approach
- Container maintains max-width 400px
- Full viewport height centering
- Forms stack vertically on all screen sizes
- Touch-friendly input sizes (minimum 44px touch targets)

## Navigation
- React Router for page transitions
- Link elements styled as purple text
- No traditional navigation bar (form-focused pages)

## Form Patterns
- Required fields marked with asterisk (*)
- Email, password, text, and date input types
- Placeholder text as field labels
- Submit buttons with descriptive text ("Entrar", "Cadastrar")

## Images
No images required - this is a form-centric business application focused on data entry and management.